const Modal = ({ closeModal, showUser }) => {
  return (
    <div>
      <h1>User name: {showUser.username}</h1>
      <p>
        {" "}
        <strong>Created at :</strong> {showUser.created_at}
      </p>
      <p>
        <strong>Karma :</strong> {showUser.karma}
      </p>
      <p>
        <strong>About :</strong> {showUser.about}
      </p>
      <button onClick={closeModal}>X</button>
    </div>
  );
};

export default Modal;
