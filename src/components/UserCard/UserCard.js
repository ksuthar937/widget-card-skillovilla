import React from "react";

import classes from "./UserCard.module.css";

const UserCard = ({ fullname, avatar, address }) => {
  return (
    <>
      <section className={classes.outer}>
        <div className={classes.avatar}>
          <img src={avatar} alt="user" width={70} />
        </div>
        <div className={classes.details}>
          <h1 className={classes.name}>
            {fullname.first} {fullname.last}
          </h1>
          <p className={classes.address}>
            {address.city}, {address.country}
          </p>
        </div>
      </section>
      <hr />
    </>
  );
};

export default UserCard;
