export default function LogoutBtn({ handleLogout }) {
  return (
    <>
      <button onClick={handleLogout} className="btn btn-outline-danger">
        Logout
      </button>
    </>
  );
}
