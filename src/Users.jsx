
function Users({ user }) {
  const nombre = `${user.name.first} ${user.name.last}`;

  const iniciales = `${user.name.first.charAt(0)}${user.name.last.charAt(0)}`;

  return (
    <div className="employee-card">
      <div className="employee-avatar">
        {iniciales.toUpperCase()}
      </div>

      <div className="employee-info">
        <h2>{nombre}</h2>

        <p>
          <strong>Email:</strong> {user.email}
        </p>

        <p>
          <strong>Teléfono:</strong> {user.phone}
        </p>

        <p>
          <strong>Empresa:</strong> {user.location.city}
        </p>
      </div>
    </div>
  );
}

export default Users;
