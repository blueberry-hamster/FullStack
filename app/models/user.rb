# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  first_name      :string
#  last_name       :string
#  email           :string
#  password_digest :string
#  session_token   :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  #---------------------------------------------------------
  # VALIDATIONS
  EMAIL_FORMAT = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i

  PASSWORD_FORMAT = /\A
    (?=.{6,15})        # Must contain 6-15 characters
    (?=.*\d)           # Must contain a digit
    (?=.*[a-z])        # Must contain a lower case character
    (?=.*[A-Z])        # Must contain an upper case character
    (?=.*[[:^alnum:]]) # Must contain a symbol
  /x
  validates :email, :password_digest, presence: true
  validates :email, format: { with: EMAIL_FORMAT } 
  validates :email, uniqueness: true
  validates :password, format: { with: PASSWORD_FORMAT }
  #---------------------------------------------------------
  
  #---------------------------------------------------------
  # ASSOCIATIONS
  
  #---------------------------------------------------------
  
  #---------------------------------------------------------
  # METHODS
  before_validation :ensure_session_token
  attr_reader :password
  
  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user && user.is_password?(password) ? user : nil
  end
  
  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end
  
  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end
  
  def new_session_token
    SecureRandom.urlsafe_base64
  end
  
  def ensure_session_token
    self.session_token ||= new_session_token
  end
  
  def reset_session_token
    self.session_token = new_session_token
    self.save!
    self.session_token
  end
  #---------------------------------------------------------
end
