# Database Based Storing

> **예시를 위해 사용자가 무언가를 입력하고 엔터를 쳤을 때, 해당 라인에 a라는 글자가 몇개가 있는지 기록하는 센서가 있다고 가정해보겠다.**

![](https://user-images.githubusercontent.com/52296323/144571094-eadc191b-7dc9-4fd8-b679-f02a5a50d593.png)

실시간 사용자 입력 센서데이터 출력

![](https://user-images.githubusercontent.com/52296323/144571105-cc08c2a7-d583-43b4-a3de-94c57a19a8dc.png)

DB에 저장된 데이터

- 센서 자체에서 Database에 접근하여 저장하는 방식은 아래와 같은 조건을 가진다.
  1. 센서에 인터넷에 접근할 수 있는 방법이 있는가?
  2. 센서에서 사용하는 환경에 Database와 프로그램을 연결할 Driver를 설치할 수 있는가?

```tsx
import { connect } from "mongoose";

const { MONGO_HOST, MONGO_PORT, MONGO_APP } = process.env;
if (MONGO_HOST) {
  const connectURL = `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_APP}`;
  try {
    await connect(connectURL);
  } catch (err: any) {
    console.error(err);
  }
  console.log("[mongoose] connected :)");
}
```

- 위의 조건들이 만족하면 Database Server에서 센서의 아이피에 대한 방화벽을 열어놓을 시, 센서에서 수집한 데이터를 언제든지 센서측에서 직접적으로 Database에 값을 넣을 수가 있다.
- 위의 조건이 만족하지 못하면 센서에서 수집한 값을 Database에 저장하는 것은 불가능하다. 인터넷에 접근은 가능하지만, Database와 자체적으로 연결을 못하는 환경이 예시로 들자면, Client Side에서의 프로그램들이다. (웹 브라우저, 모바일)
- 즉, Server Side스럽게 돌아가야 자체적으로 Database에 직접 접근하여 값을 넣을 수 있다는 말이다.
- 하지만 인터넷 접근만 가능해도 Database에 값을 넣을 수 있는 방식이 있는데, 그것이 바로 REST API 방식이다. ( Front End - Back End 와의 관계 )
