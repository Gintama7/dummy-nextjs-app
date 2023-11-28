import { useRouter } from "next/router";
import User from "./user";

const details = [
  { id: 1, name: "Yash", role: "Senior Developer" },
  { id: 2, name: "Vaibhav", role: "Backend Developer" },
  { id: 3, name: "Suresh", role: "Frontend Developer" },
];

const Developer = () => {
  const router = useRouter();
  const id = router.query.userId;

  return (
    <div>
      {id && <User id={id} info ={details[id-1]}/>}
    </div>
  );
};

export default Developer;
