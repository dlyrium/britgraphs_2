import Image from "next/image";
import styles from "./../../../ui/dashboard/products/singleProduct/singleProduct.module.css";
import { fetchSingleProduct } from "../../../lib/data";
import { updateProduct } from "../../../lib/actions";

const SingleProductPage = async ({ params }) => {
  const { id } = params;
  const product = await fetchSingleProduct(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
          <Image src={product.img || "/noproduct.jpg"} alt="" fill />
        </div>
        {product.title}
      </div>
      <div className={styles.formContainer}>
        <form action={updateProduct} className={styles.form}>
          <input type="hidden" name="id" value={product.id} />
          <label>Title</label>
          <input type="text" name="title" placeholder={product.title} />
          <label>Price</label>
          <input type="number" name="price" placeholder={product.price} />
          <label>Stock</label>
          <input type="number" name="stock" placeholder={product.stock} />
          <label>Colour</label>
          <input type="text" name="colour" placeholder={product.colour} />
          <label>Size</label>
          <input type="number" name="size" placeholder={product.size} />
          <label>Description</label>
          <textarea
            name="description"
            id="description"
            rows="10"
            placeholder={product.description}
          />
          <label>Category</label>
          <select name="category" id="category">
            <option value="general" selected={product.category === "general"}>
              General
            </option>
            <option value="phone" selected={product.category === "phone"}>
              Phone
            </option>
            <option value="computer" selected={product.category === "computer"}>
              Computer
            </option>
            <option value="kitchen" selected={product.category === "kitchen"}>
              Kitchen
            </option>
          </select>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
