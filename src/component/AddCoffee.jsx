const AddCoffee = () => {
    const handleAddCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const coffeeName = form.name.value;
        const availableQuantity = form.quantity.value;
        const taste = form.taste.value;
        const supplierName = form.supplier.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = { coffeeName, availableQuantity, taste, supplierName, category, details, photo };
        console.log(newCoffee)
        fetch('http://localhost:5000/coffees', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
    return (
        <div className="bg-[#F4F3F0] p-24">
            <h1 className="text-xl font-semiboldbold text-center">Add a Coffee</h1>
            <form onSubmit={handleAddCoffee}>
                {/* form Row */}
                <div className="md:flex gap-2 mb-8">
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text">Coffee Name:</span></label>
                        <label className="input-group">
                            <input type="text" className="input input-bordered w-full" placeholder="Coffee Name" name="name" /></label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Available Quantity</span></label>
                        <label className="input-group">
                            <input type="text" className="input input-bordered w-full" placeholder="Available Quantity" name="quantity" /></label>
                    </div>
                </div>
                {/* form supplier and Taste Row */}
                <div className="md:flex gap-2 mb-8">
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text">Supplier Name</span></label>
                        <label className="input-group">
                            <input type="text" className="input input-bordered w-full" placeholder="Supplier" name="supplier" /></label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Taste</span></label>
                        <label className="input-group">
                            <input type="text" className="input input-bordered w-full" placeholder="Taste" name="taste" /></label>
                    </div>
                </div>
                {/* form category and details Row */}
                <div className="md:flex gap-2 mb-8">
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text">Category</span></label>
                        <label className="input-group">
                            <input type="text" className="input input-bordered w-full" placeholder="Category" name="category" /></label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span></label>
                        <label className="input-group">
                            <input type="text" className="input input-bordered w-full" placeholder="Details" name="details" /></label>
                    </div>
                </div>
                {/* form S Row */}
                <div className="flexgap-2 mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo Url</span></label>
                        <label className="input-group">
                            <input type="text" className="input input-bordered w-full" placeholder="Photo Url" name="photo" /></label>
                    </div>
                </div>
                <input type="submit" value="Add Coffee" className="btn btn-block" />
            </form>
        </div>
    );
};

export default AddCoffee;