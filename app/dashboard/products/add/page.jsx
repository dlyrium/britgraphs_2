import styles from "./../../../ui/dashboard/products/addProduct/addProduct.module.css";
import { addProduct } from "./../../../lib/actions";

const AddProductPage = () => {
  return (
    <div className={styles.container}>
      <form action={addProduct} className={styles.form}>
        <input
          type="text"
          className={styles.input}
          placeholder="Title"
          name="title"
          required
        />
        <select name="category" id="category">
          <option value="general">Choose a category...</option>
          <option value="phone">Phone</option>
          <option value="computer">Computer</option>
          <option value="kitchen">Kitchen</option>
        </select>
        <input type="float" placeholder="Price" name="price" id="price" />
        <input type="number" placeholder="Stock" name="stock" id="stock" />
        <input type="text" placeholder="Colour" name="colour" id="colour" />
        <input type="text" placeholder="Size" name="size" id="size" />
        <textarea
          name="description"
          id="description"
          rows="16"
          placeholder="Description..."
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProductPage;
