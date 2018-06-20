build:
	docker-compose build

start:
	docker-compose up --build -d

stop:
	docker-compose down --rmi all

restart: stop start

install:
	docker-compose exec mountebank /bin/sh -c 'npm install'

test:
	docker-compose exec mountebank /bin/sh -c 'newman run pm/collection.json'

log:
	docker-compose logs -f

app.restart:
	docker-compose restart app

mountebank.restart:
	docker-compose restart mountebank