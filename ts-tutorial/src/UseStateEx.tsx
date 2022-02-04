import React, { useState } from "react";
//초기 값을 설정하는 경우라면 자동으로 타입이 추론됩니다. 이 경우 별도로 타입을 지정할 필요가 없습니다.
//만약 초기 값을 설정할 수 없는 경우라면 다음과 같이 작성할 수 있습니다.


//useEffect는 별도의 타입 지정 필요없음

type User = {
  uid: string;
  name: string;
  email: string | null;
  photoURL: string | null;
};

const UseStateEx = () => {

  const [user, setUser] = useState<User | null>(null);

  return (
    <div>
      
    </div>
  );
};

export default UseStateEx;