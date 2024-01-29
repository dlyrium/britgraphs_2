import styles from "./../../../ui/dashboard/users/addUser/addUser.module.css";
import { addUser } from "./../../../lib/actions";

const AddUser = () => {
  return (
    <div className={styles.container}>
      <form action={addUser} className={styles.form}>
        <input
          type="text"
          className={styles.input}
          placeholder="Username"
          name="username"
          required
        />
        <input
          type="email"
          className={styles.input}
          placeholder="Email"
          name="email"
          required
        />
        <input
          type="password"
          className={styles.input}
          placeholder="Password"
          name="password"
          required
        />
        <input
          type="phone"
          className={styles.input}
          placeholder="Phone"
          name="phone"
        />
        <select name="isAdmin" id="isAdmin">
          <option value={false}>User is Admin?</option>
          <option value={false}>No</option>
          <option value={true}>Yes</option>
        </select>
        <select name="isActive" id="isActive">
          <option value={true}>User is Active?</option>
          <option value={false}>No</option>
          <option value={true}>Yes</option>
        </select>
        <textarea
          name="address"
          id="address"
          rows="16"
          placeholder="Address"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddUser;
