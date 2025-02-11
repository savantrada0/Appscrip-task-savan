import Image from "next/image";

const Product = ({ image, description, name }) => {
  return (
    <div className="card">
      <Image src={image} width={300} height={400} alt={image} />
      <h1 className="product-bold">{name}</h1>
      <p className="description">
        {description}{" "}
        <Image
          style={{ cursor: "pointer" }}
          src="/assets/svgs/heart.svg"
          width={24}
          height={24}
          alt={"heart"}
        />
      </p>
    </div>
  );
};

export default Product;
