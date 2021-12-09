# [Data Share] openapi - other openapi

> **이전에 [Data Storing] Part에서 DB에 직접 넣는 방식과 REST API 형식으로 요청해서 데이터를 넣는 방식이 있었다.**

- 이를 참고해서 이 문제를 바라보면 간단하다. 어떤 서비스가 존재하고, 우리 측에 서비스가 존재한다면 두 개의 서비스는 모두 서버로 구성되어 있을 것이고, 서버는 Database에 직접 접근할 수도 있고, REST API 요청을 할 수도 있다.

![](https://user-images.githubusercontent.com/52296323/144742418-c0aeab57-77e4-4de7-94cd-e211a4147688.png)

1. KETI API Server 에서 Other API Server에 저장 REST API에 데이터를 보내주는 방식.
2. Other API Server 에서 KETI API Server에 데이터 요청 REST API를 보내고, KETI API Server 로 부터 응답으로 데이터를 받는 방식.
3. 서로의 DB를 각자의 Server가 조작할 수 있도록 방화벽을 열어놔주면, 아래와 같은 방식들이 가능하다.
   1. KETI Server 에서 데이터가 저장되는 대로, Other API DB Server에 바로 넣을 수 있다.
   2. Otehr API Server 에서 KETI DB Server 에 접근하여, 언제든지 데이터를 조회하고, 이를 자신들이 가지고 갈 수 있게 된다.
