import React from "react";
import IsStayComponent from "../components/IsStayComponent";
import { encryptProcess } from "../utils/ARIAUtils";
import axios from "axios";

function IsStayContainer() {
  const [isStay, setIsStay] = React.useState<boolean>(false);
  const isStayRef = React.useRef<boolean>(false);

  React.useEffect(() => {
    isStayRef.current = isStay;
  }, [isStay]);

  const onToggle = React.useCallback(() => {
    setIsStay((state) => {
      return !state;
    });
  }, []);

  React.useEffect(() => {
    setInterval(async () => {
      const result = await axios.post(
        "http://localhost:5000/admin/humanData",
        {
          building: {
            name: encryptProcess("하늘 아파트 101동"),
          },
          sensor: {
            name: encryptProcess("재실 유무"),
          },
          information: {
            isStay: encryptProcess((isStayRef.current as any).toString()),
          },
        },
        {
          headers: {
            Authorization: process.env.REACT_APP_REQUEST_ADMIN_KEY!,
          },
        }
      );
      console.log(result.data);
    }, 15000);
  }, []);

  //   console.log(process.env.REACT_APP_COMMUNITY_KEY);

  return <IsStayComponent onToggle={onToggle} isStay={isStay} />;
}

export default IsStayContainer;
