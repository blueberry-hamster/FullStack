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
  # EMAIL_FORMAT = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i

  validates :email, :password_digest, presence: true
  # validates :email, format: { with: EMAIL_FORMAT } 
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true
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
