export default function LogoutBtn({ handleLogout }) {
  return (
    <>
      <button onClick={handleLogout} className="btn btn-danger">
        Logout
      </button>
    </>
  );
}
