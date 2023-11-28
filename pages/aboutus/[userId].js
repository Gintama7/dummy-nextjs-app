import { useRouter } from "next/router";

const Developer = () => {
  const details = [
    { id: 1, name: "Yash", role: "Senior Developer" },
    { id: 2, name: "Vaibhav", role: "Backend Developer" },
    { id: 3, name: "Suresh", role: "Frontend Developer" },
  ];
  const router = useRouter();
  const id = router.query.userId;
  console.log(id);
  let data = "";
  for (let i = 0; i < details.length; i++) {
    if (details[i].id === id) {
      data = details[i];
    }
  }
  console.log(data.name);

  return <li>{data.name}</li>;
};

export default Developer;
