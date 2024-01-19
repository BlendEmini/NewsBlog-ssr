const CategoryBtn = ({ category }) => {
    return (
        <div className="w-28 py-1 text-center  bg-btnBackground flex flex-col justify-items-center align-items-center box-border border-radius-btn">
            <h6 className="text-blueButton font-semibold">{category}</h6>
        </div>
    );
};

export default CategoryBtn;
