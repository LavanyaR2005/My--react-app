function Notifications() {

  const user =
    JSON.parse(localStorage.getItem("currentUser"));

  const notifications =
    JSON.parse(localStorage.getItem("notifications")) || [];

  const myNotifications =
    notifications.filter(
      (n) => n.email === user?.email
    );

  return (
    <div className="page-container">

      <h1>Notifications</h1>

      {myNotifications.length > 0 ? (

        myNotifications.map((n, index) => (

          <div
            key={index}
            className="activity-item"
          >
            🔔 {n.message}
          </div>

        ))

      ) : (

        <p>No notifications yet.</p>

      )}

    </div>
  );
}

export default Notifications;