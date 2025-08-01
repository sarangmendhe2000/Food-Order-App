const User = ({name , location} ) => {
    return(
        <div className="min-h-[20vh] w-full border-2 border-black bg-[#e1e6e8] p-5">
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h3>Contact: sarangmendhe22@gmail.com</h3>
        </div>
    )
}

export default User ;