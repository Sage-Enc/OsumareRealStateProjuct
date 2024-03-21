import React from "react";
import ApprovalHomeUserCard from "./ApprovalHomeUserCard"

const User = () => {


  return (
    <div>
      <ApprovalHomeUserCard Acti={false} />
      <ApprovalHomeUserCard Acti={true} />
      <ApprovalHomeUserCard Acti={false} />
      <ApprovalHomeUserCard Acti={true} />
      <ApprovalHomeUserCard Acti={false} />
    </div>
  );
};

export default User;
