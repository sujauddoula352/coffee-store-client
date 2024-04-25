import { useLoaderData } from "react-router-dom";

const UpdateCoffee = () => {
    const upDateCoffee = useLoaderData();
    return (
        <div>
            {upDateCoffee.length}
        </div>
    );
};

export default UpdateCoffee;