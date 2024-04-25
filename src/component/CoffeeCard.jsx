import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
    const { _id, coffeeName, availableQuantity, taste, supplierName, category, details, photo } = coffee;
    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                // Swal.fire({
                //     title: "Deleted!",
                //     text: "Your file has been deleted.",
                //     icon: "success"
                // });
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE',
                }
                )
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={photo} alt="Movie" /></figure>
            <div className="flex justify-between w-full">
                <div>
                    <h2 className="text-2xl font-bold">Name:{coffeeName}</h2>
                    <p>{supplierName}</p>
                    <p>{category}</p>
                    <p>{availableQuantity}</p>
                    <p>{taste}</p>
                    <p>{details}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="flex flex-col gap-3">
                        <button className="btn">View</button>
                        <button className="btn">Edited</button>
                        <button
                            onClick={() => handleDelete(_id)}
                            className="btn bg-red-400">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;