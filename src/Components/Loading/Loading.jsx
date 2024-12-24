import { PuffLoader } from "react-spinners";
const Loading = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="my-52">
        <PuffLoader color="#00ecc6" size={120} />
      </div>
      <div></div>
    </div>
  );
};

export default Loading;
