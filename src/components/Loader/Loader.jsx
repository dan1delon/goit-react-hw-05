import { LineWave } from 'react-loader-spinner';

const Loader = () => {
  return (
    <LineWave
      visible={true}
      height="200"
      width="200"
      color="#4fa94d"
      ariaLabel="line-wave-loading"
      wrapperStyle={{}}
      wrapperClass=""
      firstLineColor=""
      middleLineColor=""
      lastLineColor=""
    />
  );
};

export default Loader;
