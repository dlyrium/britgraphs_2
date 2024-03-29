import Image from "next/image";
import styles from "./../../../ui/dashboard/users/singleUser/singleUser.module.css";
import { fetchSingleUser } from "../../../lib/data";
import { updateUser } from "../../../lib/actions";

const SingleUserPage = async ({ params }) => {
  const { id } = params;
  const user = await fetchSingleUser(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
          <Image src={user.img || "/noavatar.png"} alt="" fill />
        </div>
        {user.username}
      </div>
      <div className={styles.formContainer}>
        <form action={updateUser} className={styles.form}>
          <input type="hidden" name="id" value={user.id} />
          <label>Username</label>
          <input type="text" name="username" placeholder={user.username} />
          <label>Email</label>
          <input type="email" name="email" placeholder={user.email} />
          <label>Password</label>
          <input type="password" name="password" placeholder="" />
          <label>Phone</label>
          <input type="phone" name="phone" placeholder={user.phone} />
          <label>Address</label>
          <textarea
            name="address"
            id="address"
            rows="10"
            placeholder={user.address}
          />
          <label>User is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={false} selected={!user.isAdmin}>
              No
            </option>
            <option value={true} selected={user.isAdmin}>
              Yes
            </option>
          </select>
          <label>User is Active?</label>
          <select name="isActive" id="isActive">
            <option value={true} selected={user.isActive}>
              Yes
            </option>
            <option value={false} selected={!user.isActive}>
              No
            </option>
          </select>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
