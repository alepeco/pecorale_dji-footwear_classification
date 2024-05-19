FROM openjdk:21-jdk-slim
# Copy Files
WORKDIR /usr/src/app
COPY . .
# Install
RUN ./mvnw -Dmaven.test.skip=true package
# Docker Run Command
EXPOSE 8080
CMD ["java","-jar","/usr/src/app/target/pecorale_dji-footwear_classification-0.0.1-SNAPSHOT.jar"]