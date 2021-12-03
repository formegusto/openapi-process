# REST API Based Storing

> **예시를 위해, 자체적으로 Database를 가지고 값을 넣을 수 없는 웹 브라우저 환경에서, 사용자의 마우스 움직임을 5초마다 기록하는 센서가 있다고 가정해보겠다.**

![실시간 사용자 마우스 움직임 감지 센서](%5BData%20Storing%5D%20sensor%201210f7cadeee4980ba0252aef6682d8f/Untitled%202.png)

실시간 사용자 마우스 움직임 감지 센서

![DB에 저장된 데이터](%5BData%20Storing%5D%20sensor%201210f7cadeee4980ba0252aef6682d8f/Untitled%203.png)

DB에 저장된 데이터

- 웹 브라우저 환경자체는 자체적인 Database를 가지고 그곳에 연결할 수가 없다. 하지만 인터넷 연결이 되어있다면 자체적으로 Database와 연결할 수 있는 Server Side 의 환경에게 자신이 수집한 데이터를 넘겨주고, Server Side 쪽에서 연결된 Database에 센서가 넘겨준 데이터를 저장하게 되는 방식이다.

```tsx
const result = await axios.post("http://localhost:8080/mouse-movement", {
  ...offset,
});
```

```tsx
app.post("/mouse-movement", async (req: Request, res: Response) => {
  const info = <MouseMovementInfo>req.body;

  try {
    const model = new MouseMovementModel({
      ...info,
      createdAt: new Date(),
    });
    const result = await model.save();

    return res.status(200).json({
      status: true,
      result,
    });
  } catch (err: any) {
    console.error(err);
    return res.status(500).json({
      status: false,
      message: err.message,
    });
  }
});
```

- 여러 예시들을 봤는데, 다음과 같이 자체적으로 Database를 건들 수 없는 센서의 경우에는 별도의 웹서버를 구성하여 거기에 api 요청을 보내서 Database에 값을 넣기도 하는 것 같다.
