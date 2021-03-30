import { useEffect, useState } from "react";
import AccessDenied from './AccessDenied';

function AdminPage() {

  const [hasAccess, setAccess] = useState(false);

  useEffect(() => {
    //redirect if userID is not admin user
    setAccess(true);
  }, [])

  if (hasAccess) return(
    <div className="admin-page card mt-3">
      <div className="card-body">
        <h5 className="card-title">Welcome Back [Admin]</h5>

      </div>
    </div>
  )
  else return <AccessDenied />
}

export default AdminPage;