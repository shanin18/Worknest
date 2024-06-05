import { Spinner } from "@chakra-ui/react";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center mt-20">
      <Spinner size="lg" color="green.500" />
    </div>
  );
};

export default LoadingSpinner;
