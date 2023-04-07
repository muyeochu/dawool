
FROM openjdk:11-jdk

volume ["/var/log/"]

EXPOSE 8888

ARG JAR_FILE=./build/libs/api-0.0.1-SNAPSHOT.jar

COPY ${JAR_FILE} app.jar

ENTRYPOINT ["java", "-jar", "-Dserver.port=8888" , "/app.jar"]
