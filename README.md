# sequelize-ex

# 개요
[Sequelize](https://sequelize.org/)와 [PostgreSQL](https://www.postgresql.org/)를 사용하여 ORM 관련하여 학습하는 저장소 입니다.

# 개발환경
- docker
- docker-compose
- node v12
- yarn v1.21

# 실행방법

## 의존성 설치
```bash
$ yarn

# or use npm
$ npm i
```

## .env 수정
```
DB_VERSION=11.6
DB_HOST=localhost
DB_PORT=5432
DB_NAME=YOUR_DB_NAME
DB_USER=YOUR_DB_USER
DB_PASS=YOUR_DB_PASS
```

## PostgreSQL 설치

### Using docker-compose (추천)
```bash
$ docker-compose up -d
```

### Using docker
```bash
$ docker volume create dbdata
$ docker container run -itd --name pg_db -e POSTGRES_DB=YOUR_DB_NAME -e POSTGRES_USER=YOUR_DB_USER -e POSTGRES_PASSWORD=YOUR_DB_PASS -p 5432:5432 --restart always -v dbdata:/var/lib/postgresql/data postgres:11.6
```

### Install PostgreSQL
- [PostgreSQL 설치 참조](https://www.postgresql.org/download/)

## Sequelize Migration & Seed
```bash
# 테이블 생성
$ yarn sequelize db:migrate
# Seed 데이터 생성
$ yarn sequelize db:seed:all
```

## 프로그램 실행
```bash
$ yarn start

# or use npm
$ npm run start
```
