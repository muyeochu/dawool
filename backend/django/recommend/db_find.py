from pymongo import MongoClient

# MongoDB와 연결합니다.
client = MongoClient('mongodb+srv://S08P22D105:Cw7h8LqfQd@ssafy.ngivl.mongodb.net/S08P22D105?')

# 데이터베이스와 컬렉션을 선택합니다.

db = client.S08P22D105 # 데이터베이스 이름을 알맞게 입력해주세요
collection = db.recommend_tour # 컬렉션 이름을 알맞게 입력해주세요

# GeoJSON 객체를 생성합니다.
point = {
    "type": "Point",
    "coordinates": [127.047883, 37.502262]
}

# 거리 쿼리를 실행합니다.
query = {
  "location": {
    "$near": {
      "$geometry": {
        "type": "Point",
        "coordinates": [127.0382645842, 37.5035043081]
      },
      "$maxDistance": 50000 
    }
  }
}

result = collection.find(query)
for document in result:
    print(document)