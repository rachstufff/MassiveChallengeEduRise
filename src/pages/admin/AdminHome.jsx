import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styleadmin.css";
import {
  User,
  LayoutDashboard,
  BarChart3,
  HelpCircle,
  Monitor,
  Edit,
  Trash,
  Plus,
  AlertTriangle,
  Frown,
  FileText,
} from "lucide-react";

const AdminHome = () => {
  // Sample initial data
  const initialUsers = [
    {
      id: 1,
      name: "Dian Oslo",
      email: "yanzinvoker123@gmail.com",
      status: "Diterima",
    },
    {
      id: 2,
      name: "Anita Wulandari",
      email: "anita.w@gmail.com",
      status: "Proses Seleksi",
    },
    {
      id: 3,
      name: "Budi Santoso",
      email: "budisantoso@gmail.com",
      status: "Ditolak",
    },
  ];

  // Sample initial articles data
  const initialArticles = [
    {
      id: 1,
      title: "Tips Lolos Beasiswa Luar Negeri",
      author: "Admin EduRise",
      content:
        "Artikel ini menjelaskan tentang tips dan trik untuk lolos seleksi beasiswa luar negeri...",
    },
    {
      id: 2,
      title: "Persiapan Dokumen Beasiswa",
      author: "Tim Editor",
      content:
        "Sebelum mendaftar beasiswa, pastikan dokumen-dokumen penting ini sudah kamu persiapkan dengan baik...",
    },
    {
      id: 3,
      title: "Pengalaman Kuliah di Jerman",
      author: "Anita W.",
      content:
        "Berbagi pengalaman selama menjalani kuliah di Jerman dengan beasiswa DAAD...",
    },
  ];

  // State for managing users data
  const [users, setUsers] = useState(initialUsers);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    status: "Proses Seleksi",
  });

  // State for managing articles data
  const [articles, setArticles] = useState(initialArticles);

  // Add state for delete confirmation modal
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Add new user
  const handleAddUser = () => {
    setSelectedUser(null);
    setFormData({ name: "", email: "", status: "Proses Seleksi" });
    setShowForm(true);
  };

  // Edit existing user
  const handleEditUser = (user) => {
    setSelectedUser(user);
    setFormData({
      name: user.name,
      email: user.email,
      status: user.status,
    });
    setShowForm(true);
  };

  // Updated delete handler to show confirmation modal
  const handleDeleteUser = (userId) => {
    const user = users.find((u) => u.id === userId);
    setUserToDelete(user);
    setShowDeleteModal(true);
  };

  // Delete article handler
  const handleDeleteArticle = (articleId) => {
    const article = articles.find((a) => a.id === articleId);
    setUserToDelete({ id: article.id, name: article.title }); // Reuse delete modal
    setShowDeleteModal(true);
  };

  // Confirm delete action
  const confirmDelete = () => {
    if (userToDelete) {
      setUsers(users.filter((user) => user.id !== userToDelete.id));
      setArticles(articles.filter((article) => article.id !== userToDelete.id)); // Remove article if it was the one deleted
      setShowDeleteModal(false);
      setUserToDelete(null);
    }
  };

  // Cancel delete action
  const cancelDelete = () => {
    setShowDeleteModal(false);
    setUserToDelete(null);
  };

  // Submit form (add or update)
  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedUser) {
      // Update existing user
      setUsers(
        users.map((user) =>
          user.id === selectedUser.id
            ? {
                ...user,
                name: formData.name,
                email: formData.email,
                status: formData.status,
              }
            : user
        )
      );
    } else {
      // Add new user
      const newUser = {
        id: users.length ? Math.max(...users.map((u) => u.id)) + 1 : 1,
        name: formData.name,
        email: formData.email,
        status: formData.status,
      };
      setUsers([...users, newUser]);
    }

    // Reset form
    setShowForm(false);
    setSelectedUser(null);
  };

  return (
    <div className="admin-layout">
      {/* Top header bar */}
      <header className="admin-header">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <div className="admin-logo-circle me-3">
              <img src="/asset/Ellipse 1.png" alt="EduRise Logo" />
            </div>
            <h4 className="mb-0 fst-italic fw-bold ms-2">EDURISE ADMIN</h4>
          </div>
          <div className="user-icon">
            <User size={24} />
          </div>
        </div>
      </header>

      {/* Sidebar navigation */}
      <nav className="admin-sidebar">
        <h5 className="sidebar-title">Menu</h5>
        <Link to="/dashadmin" className="nav-link active">
          <LayoutDashboard className="lucide me-2" />
          Dashboard
        </Link>
        <Link to="/artikeladmin" className="nav-link">
          <BarChart3 className="lucide me-2" />
          Artikel
        </Link>
        <Link to="#" className="nav-link">
          <HelpCircle className="lucide me-2" />
          Helpdesk
        </Link>
        <Link to="#" className="nav-link">
          <Monitor className="lucide me-2" />
          Monitoring
        </Link>
        <hr className="text-white" />
        <Link to="#" className="nav-link">
          Scholarship Hub
        </Link>
        <Link to="#" className="nav-link">
          Eduprep Tools
        </Link>
        <Link to="#" className="nav-link">
          Edu Event
        </Link>
        <Link to="#" className="nav-link">
          Edu Connect
        </Link>
        <Link to="#" className="nav-link">
          User Settings
        </Link>
        <Link to="#" className="nav-link">
          Settings
        </Link>
      </nav>

      {/* Main content area */}
      <main className="admin-content">
        {/* Statistic Cards */}
        <div className="row g-3 mb-4">
          <div className="col-md-3">
            <div className="card text-center">
              <div className="card-body">
                <h6>Total Scholarship</h6>
                <h4>54</h4>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card text-center">
              <div className="card-body">
                <h6>Total CV Downloaded</h6>
                <h4>1001</h4>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card text-center">
              <div className="card-body">
                <h6>Total Users</h6>
                <h4>1128</h4>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card text-center">
              <div className="card-body">
                <h6>Total Mentor</h6>
                <h4>102</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Data User Table */}
        <section className="mb-5">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
              <strong>Data User</strong>
              <button
                className="btn btn-sm btn-primary"
                onClick={handleAddUser}
              >
                <Plus size={16} className="me-1" />
                Tambah User
              </button>
            </div>
            <div className="card-body">
              <div className="alert alert-danger" role="alert">
                ⚠️ Selalu Periksa Status Beasiswa dari Tiap User, dan Teliti
                Saat Merubah Data!
              </div>

              {/* Form for adding/editing user */}
              {showForm && (
                <div className="card mb-3">
                  <div className="card-header bg-light">
                    <strong>
                      {selectedUser ? "Edit User" : "Tambah User"}
                    </strong>
                  </div>
                  <div className="card-body">
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                          Nama/Username
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="status" className="form-label">
                          Status Beasiswa
                        </label>
                        <select
                          className="form-select"
                          id="status"
                          name="status"
                          value={formData.status}
                          onChange={handleInputChange}
                        >
                          <option value="Proses Seleksi">Proses Seleksi</option>
                          <option value="Diterima">Diterima</option>
                          <option value="Ditolak">Ditolak</option>
                        </select>
                      </div>
                      <div className="d-flex justify-content-end">
                        <button
                          type="button"
                          className="btn btn-secondary me-2"
                          onClick={() => setShowForm(false)}
                        >
                          Batal
                        </button>
                        <button type="submit" className="btn btn-primary">
                          {selectedUser ? "Update" : "Simpan"}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}

              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead className="table-light">
                    <tr>
                      <th>Nama/Username</th>
                      <th>Email</th>
                      <th>Status Beasiswa</th>
                      <th>Perubahan</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                          <span
                            className={`badge ${
                              user.status === "Diterima"
                                ? "bg-success"
                                : user.status === "Ditolak"
                                ? "bg-danger"
                                : "bg-warning"
                            }`}
                          >
                            {user.status}
                          </span>
                        </td>
                        <td>
                          <button
                            className="btn btn-sm btn-primary me-1"
                            onClick={() => handleEditUser(user)}
                          >
                            <Edit size={16} />
                          </button>
                          <button
                            className="btn btn-sm btn-danger"
                            onClick={() => handleDeleteUser(user.id)}
                          >
                            <Trash size={16} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Kelola Artikel Table */}
        <section className="mb-5">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
              <strong>Kelola Artikel</strong>
              <Link to="/artikeladmin" className="btn btn-sm btn-primary">
                <Plus size={16} className="me-1" />
                Tambah Artikel
              </Link>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead className="table-light">
                    <tr>
                      <th>Judul Artikel</th>
                      <th>Penulis</th>
                      <th>Isi Artikel</th>
                      <th>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {articles.map((article) => (
                      <tr key={article.id}>
                        <td className="fw-semibold">{article.title}</td>
                        <td>{article.author}</td>
                        <td>
                          <div
                            className="text-truncate"
                            style={{ maxWidth: "300px" }}
                          >
                            {article.content}
                          </div>
                        </td>
                        <td>
                          <Link
                            to={`/artikeladmin?id=${article.id}`}
                            className="btn btn-sm btn-primary me-1"
                          >
                            <Edit size={16} />
                          </Link>
                          <button
                            className="btn btn-sm btn-danger"
                            onClick={() => handleDeleteArticle(article.id)}
                          >
                            <Trash size={16} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Delete Confirmation Modal */}
        {showDeleteModal && (
          <div className="modal-overlay">
            <div className="modal-wrapper">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header bg-light">
                    <h5 className="modal-title d-flex align-items-center">
                      <AlertTriangle className="text-danger me-2" size={28} />
                      <span className="fs-5">Konfirmasi Hapus Data</span>
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      onClick={cancelDelete}
                    ></button>
                  </div>
                  <div className="modal-body p-4 text-center">
                    <Frown size={96} color="#dc3545" />{" "}
                    {/* Increased icon size */}
                    <h4 className="mt-4 mb-3">Apakah Anda yakin?</h4>{" "}
                    {/* Larger heading */}
                    <p className="fs-5 mb-4">
                      Data user <strong>{userToDelete?.name}</strong> akan
                      dihapus secara permanen.
                    </p>
                    <p className="text-danger">
                      <small>Tindakan ini tidak dapat dibatalkan.</small>
                    </p>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary rounded-pill px-4"
                      onClick={cancelDelete}
                    >
                      Batal
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger rounded-pill px-4"
                      onClick={confirmDelete}
                    >
                      <Trash size={16} className="me-1" /> Hapus
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminHome;
