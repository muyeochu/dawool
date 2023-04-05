FROM python:3.8.10

WORKDIR /usr/src/app
COPY . .
COPY requirements.txt ./

RUN pip install --upgrade pip
RUN pip install -r requirements.txt

EXPOSE 5000

CMD ["python3", "./manage.py", "runserver", "0.0.0.0:5000"]
