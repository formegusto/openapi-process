# [Documentaion] Plan

# 1. Role Process

![Untitled](%5BDocumentaion%5D%20Plan%202a5e6476e7b4415a90662c69c42a1e15/Untitled.png)

1. User
   1. Open API의 사용자
   2. 원시 수집데이터를 원하면 KETI Open API에게, 가공데이터를 원하면 타 API에게 요청을 한다.
2. KETI API
   1. Sensor로부터 데이터를 전달받아서 저장하는 역할
   2. 내부 프로세스를 통해, 사용자에게 수집데이터를 제공한다.
3. Other API
   1. KETI API에게 요청을 통해, 수집데이터를 가공한다.
   2. 가공된 데이터는 해당 API Service의 내부 프로세스를 통해, 사용자에게 가공데이터를 제공한다.

# 2. 데이터 수집

1. 현재 Sensor 정보가 명확하지 않고, Arduino 인지, Rasberry Pi인지도 확실하지 않은 상태이므로 두 계열의 database 연결가능여부, api 통신가능여부를 체크한다.
2. database 연결 시, 예제

   Typescript cmd programming 으로 DB만 연결되면 센서측에서 데이터를 바로 데이터베이스에 넣을 수 있다는 것을 보여주기 위한 예제 ( item : 사용자가 enter key를 누르는 시간 데이터 )

3. api 통신가능 시, 예제

   Typescript react programming 으로 센서가 외부 서버에 요청이 가능하면 어떻게 데이터를 넣을 수 있는지 보여주는 예제

# 3. KETI API 데이터 제공

- prototype-keti-openapi-fe, prototype-keti-openapi-be-ts 를 통해, 사용자에게 제공될 openapi process 소개

# 4. Other API - KETI API Chain

- KETI API 측에 수집데이터를 요청하고, 이를 가공하는 API Service에서 어떻게 KETI API 측에 요청을 하게 되고, 자신은 이를 어떻게 가공할 수 있는지 까지의 process 소개
