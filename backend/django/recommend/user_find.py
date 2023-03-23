from pymongo import MongoClient
from bson import ObjectId
import jwt
from django.conf import settings
import base64


client = MongoClient('mongodb+srv://S08P22D105:Cw7h8LqfQd@ssafy.ngivl.mongodb.net/S08P22D105?')

db = client.S08P22D105 # 데이터베이스 이름을 알맞게 입력해주세요
collection = db.user # 컬렉션 이름을 알맞게 입력해주세요

# user_id = '640ea69189a6515aecd44df8'
# result = collection.find({'_id': ObjectId(user_id)})

token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2NDBlYTY5MTg5YTY1MTVhZWNkNDRkZjgiLCJBdXRoZW50aWNhdGlvbiI6IlVTRVIiLCJpYXQiOjE2Nzk1NTUxNzIsImV4cCI6MTY4MjE0NzE3Mn0.WZR8zznJipY1KFy_mzOx5FboMOrCQoKJpo8x9fZqgGw'
# print(token)
SECRET_KEY = 'ZJ3K4M6P7Q8SATBUDWEXFZH2J3K5N6P7R9SATCVDWEYGZH2K4M5N7Q8R9T'
# JWT decode
# print(SECRET_KEY)

# sitename_bytes = base64.b64decode(SECRET_KEY)
# sitename = sitename_bytes.decode('ascii') 

encoded_secret_key = base64.b64decode(SECRET_KEY + '==')

print(encoded_secret_key)
# print(sitename)

decoded_payload = jwt.decode(token, encoded_secret_key,algorithms=['HS256'])

print(decoded_payload)