import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { User, LayoutDashboard, Edit, Trash, Plus, AlertTriangle, Frown } from 'lucide-react';

const AdminHome = () => {
  const navigate = useNavigate();

  // Sample initial data
  const initialUsers = [
    { id: 1, name: 'Dian Oslo', email: 'yanzinvoker123@gmail.com', status: 'Diterima' },
    { id: 2, name: 'Anita Wulandari', email: 'anita.w@gmail.com', status: 'Proses Seleksi' },
    { id: 3, name: 'Budi Santoso', email: 'budisantoso@gmail.com', status: 'Ditolak' }
  ];

  // Sample initial articles data
  const initialArticles = [
    { id: 1, title: 'Tips Lolos Beasiswa Luar Negeri', author: 'Admin EduRise', content: 'Artikel ini menjelaskan tentang tips dan trik untuk lolos seleksi beasiswa luar negeri...' },
    { id: 2, title: 'Persiapan Dokumen Beasiswa', author: 'Tim Editor', content: 'Sebelum mendaftar beasiswa, pastikan dokumen-dokumen penting ini sudah kamu persiapkan dengan baik...' },
    { id: 3, title: 'Pengalaman Kuliah di Jerman', author: 'Anita W.', content: 'Berbagi pengalaman selama menjalani kuliah di Jerman dengan beasiswa DAAD...' }
  ];

  // State for managing users data
  const [users, setUsers] = useState(initialUsers);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', status: 'Proses Seleksi' });

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
      [name]: value
    });
  };

  // Add new user
  const handleAddUser = () => {
    setSelectedUser(null);
    setFormData({ name: '', email: '', status: 'Proses Seleksi' });
    setShowForm(true);
  };

  // Edit existing user
  const handleEditUser = (user) => {
    setSelectedUser(user);
    setFormData({
      name: user.name,
      email: user.email,
      status: user.status
    });
    setShowForm(true);
  };

  // Updated delete handler to show confirmation modal
  const handleDeleteUser = (userId) => {
    const user = users.find(u => u.id === userId);
    setUserToDelete(user);
    setShowDeleteModal(true);
  };

  // Delete article handler
  const handleDeleteArticle = (articleId) => {
    const article = articles.find(a => a.id === articleId);
    setUserToDelete({ id: article.id, name: article.title }); // Reuse delete modal
    setShowDeleteModal(true);
  };

  // Confirm delete action
  const confirmDelete = () => {
    if (userToDelete) {
      setUsers(users.filter(user => user.id !== userToDelete.id));
      setArticles(articles.filter(article => article.id !== userToDelete.id)); // Remove article if it was the one deleted
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
      setUsers(users.map(user =>
        user.id === selectedUser.id ?
          { ...user, name: formData.name, email: formData.email, status: formData.status } :
          user
      ));
    } else {
      // Add new user
      const newUser = {
        id: users.length ? Math.max(...users.map(u => u.id)) + 1 : 1,
        name: formData.name,
        email: formData.email,
        status: formData.status
      };
      setUsers([...users, newUser]);
    }

    // Reset form
    setShowForm(false);
    setSelectedUser(null);
  };

  return (
    <div className="grid grid-cols-[250px_1fr] min-h-screen">
      {/* Top header bar - dengan z-index tinggi */}
      <header className="col-span-2 bg-white h-[60px] px-5 shadow-sm fixed top-0 left-0 right-0 z-50 flex items-center">
        <div className="w-full flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-white shadow-sm mr-3">
              <img src="/img/eduriselanding/Ellipse 1.png" alt="EduRise Logo" className="w-[34px] h-[34px] object-contain" />
            </div>
            <h4 className="m-0 italic font-bold ml-2">EDURISE ADMIN</h4>
          </div>
          <Link to="/data-admin" className="w-10 h-10 rounded-full bg-[#3375CC] text-white !text-white flex items-center justify-center">
            <User size={24} />
          </Link>
        </div>
      </header>

      {/* Sidebar navigation */}
      <nav className="bg-[#1e3a8a] !bg-[#1e3a8a] text-white p-6 pt-[10px] fixed top-0 left-0 h-screen w-[250px] overflow-y-auto z-40">
        <div className="space-y-6 text-white">
          {/* Main Menu Group */}
          <div>
            <h5 className="text-sm uppercase font-bold !text-white mb-3 px-2">Dashboard</h5>
            <ul className="space-y-1.5">
              <li>
                {/* DIHUBUNGKAN KE dataAdminpage.jsx jika ditekan */}
                <Link to="/data-admin" className="flex items-center !text-white py-2.5 px-3 rounded-lg bg-[#3375CC] hover:bg-[#2d4fc7] transition-colors">
                  <LayoutDashboard className="w-5 h-5 mr-3 text-white" />
                  <span className="!text-white">Dashboard</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Group */}
          <div>
            <h5 className="text-sm uppercase font-bold !text-white mb-3 px-2">Layanan</h5>
            <ul className="space-y-1.5">
              <li>
                <a href="#" className="flex items-center !text-white py-2.5 px-3 rounded-lg hover:bg-[#2d4fc7] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                  <span className="!text-white">Scholarship Hub</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center !text-white py-2.5 px-3 rounded-lg hover:bg-[#2d4fc7] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                  </svg>
                  <span className="!text-white">Eduprep Tools</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center !text-white py-2.5 px-3 rounded-lg hover:bg-[#2d4fc7] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                  </svg>
                  <span className="!text-white">Edu Academy</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center !text-white py-2.5 px-3 rounded-lg hover:bg-[#2d4fc7] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <span className="!text-white">Edu Event</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center !text-white py-2.5 px-3 rounded-lg hover:bg-[#2d4fc7] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  <span className="!text-white">Edu Connect</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Settings Group */}
          <div>
            <h5 className="text-sm uppercase font-bold !text-white mb-3 px-2">Pengaturan</h5>
            <ul className="space-y-1.5">
              <li>
                <a href="#" className="flex items-center !text-white py-2.5 px-3 rounded-lg hover:bg-[#2d4fc7] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  <span className="!text-white">User Settings</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center !text-white py-2.5 px-3 rounded-lg hover:bg-[#2d4fc7] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                  </svg>
                  <span className="!text-white">Settings</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main content area - dengan margin yang disesuaikan */}
      <main className="col-start-2 ml-[10px] mt-[60px] p-5 bg-[#f9fafb] min-h-[calc(100vh-60px)]">
        {/* Statistic Cards dengan padding yang disesuaikan */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-5">
          <div className="bg-white rounded shadow-sm">
            <div className="p-4 text-center">
              <h6 className="text-sm font-medium mb-1">Total Scholarship</h6>
              <h4 className="text-xl font-semibold">54</h4>
            </div>
          </div>
          <div className="bg-white rounded shadow-sm">
            <div className="p-4 text-center">
              <h6 className="text-sm font-medium mb-1">Total CV Downloaded</h6>
              <h4 className="text-xl font-semibold">1001</h4>
            </div>
          </div>
          <div className="bg-white rounded shadow-sm">
            <div className="p-4 text-center">
              <h6 className="text-sm font-medium mb-1">Total Users</h6>
              <h4 className="text-xl font-semibold">1128</h4>
            </div>
          </div>
          <div className="bg-white rounded shadow-sm">
            <div className="p-4 text-center">
              <h6 className="text-sm font-medium mb-1">Total Mentor</h6>
              <h4 className="text-xl font-semibold">102</h4>
            </div>
          </div>
        </div>

        {/* Data User Table */}
        <section className="mb-5">
          <div className="bg-white rounded shadow-sm">
            <div className="flex justify-between items-center p-4 border-b bg-gray-50">
              <strong>Data User</strong>
              <button
                className="px-2.5 py-1 text-sm bg-[#3375CC] hover:bg-[#295ea3] text-white rounded flex items-center"
                onClick={handleAddUser}
              >
                <Plus size={16} className="mr-1" />
                Tambah User
              </button>
            </div>
            <div className="p-4">
              <div className="p-4 mb-4 bg-red-100 text-red-700 rounded border border-red-200" role="alert">
                ⚠️ Selalu Periksa Status Beasiswa dari Tiap User, dan Teliti Saat Merubah Data!
              </div>

              {/* Form for adding/editing user */}
              {showForm && (
                <div className="mb-3 bg-white rounded shadow-sm">
                  <div className="p-4 bg-gray-50 border-b">
                    <strong>{selectedUser ? 'Edit User' : 'Tambah User'}</strong>
                  </div>
                  <div className="p-4">
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label htmlFor="name" className="block mb-1 font-medium">Nama/Username</label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#3375CC]/25 focus:border-[#3375CC]"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="email" className="block mb-1 font-medium">Email</label>
                        <input
                          type="email"
                          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#3375CC]/25 focus:border-[#3375CC]"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="status" className="block mb-1 font-medium">Status Beasiswa</label>
                        <select
                          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#3375CC]/25 focus:border-[#3375CC]"
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
                      <div className="flex justify-end">
                        <button
                          type="button"
                          className="px-4 py-2 mr-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                          onClick={() => setShowForm(false)}
                        >
                          Batal
                        </button>
                        <button
                          type="submit"
                          className="px-4 py-2 bg-[#3375CC] hover:bg-[#295ea3] text-white rounded"
                        >
                          {selectedUser ? 'Update' : 'Simpan'}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}

              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 p-2 text-left">Nama/Username</th>
                      <th className="border border-gray-300 p-2 text-left">Email</th>
                      <th className="border border-gray-300 p-2 text-left">Status Beasiswa</th>
                      <th className="border border-gray-300 p-2 text-left">Perubahan</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map(user => (
                      <tr key={user.id} className="border-b border-gray-300">
                        <td className="border border-gray-300 p-2">{user.name}</td>
                        <td className="border border-gray-300 p-2">{user.email}</td>
                        <td className="border border-gray-300 p-2">
                          <span className={`px-2 py-1 text-xs font-bold rounded-full text-white ${user.status === 'Diterima' ? 'bg-green-500' :
                            user.status === 'Ditolak' ? 'bg-red-500' : 'bg-yellow-500'
                            }`}>
                            {user.status}
                          </span>
                        </td>
                        <td className="border border-gray-300 p-2">
                          <button
                            className="p-1 mr-1 bg-[#3375CC] text-white rounded hover:bg-[#295ea3]"
                            onClick={() => handleEditUser(user)}
                          >
                            <Edit size={16} />
                          </button>
                          <button
                            className="p-1 bg-red-500 text-white rounded hover:bg-red-600"
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
          <div className="bg-white rounded shadow-sm">
            <div className="flex justify-between items-center p-4 border-b bg-gray-50">
              <strong>Kelola Artikel</strong>
              {/* NANTI DIHUBUNGKAN KE artikelAdmin.jsx */}
              <Link
                to="/artikeladmin"
                className="px-2.5 py-1 text-sm bg-[#3375CC] hover:bg-[#295ea3] text-white !text-white rounded flex items-center"
              >
                <Plus size={16} className="mr-1 text-white" />
                <span className="!text-white">Tambah Artikel</span>
              </Link>
            </div>

            <div className="p-4">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 p-2 text-left">Judul Artikel</th>
                      <th className="border border-gray-300 p-2 text-left">Penulis</th>
                      <th className="border border-gray-300 p-2 text-left">Isi Artikel</th>
                      <th className="border border-gray-300 p-2 text-left">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {articles.map(article => (
                      <tr key={article.id} className="border-b border-gray-300">
                        <td className="border border-gray-300 p-2 font-semibold">{article.title}</td>
                        <td className="border border-gray-300 p-2">{article.author}</td>
                        <td className="border border-gray-300 p-2">
                          <div className="truncate max-w-[300px]">
                            {article.content}
                          </div>
                        </td>
                        <td className="border border-gray-300 p-2">
                          <Link
                            to={`/artikeladmin?id=${article.id}`}
                            className="p-1 mr-1 bg-[#3375CC] text-white !text-white rounded inline-flex hover:bg-[#295ea3]"
                          >
                            <Edit size={16} />
                          </Link>
                          <button
                            className="p-1 bg-red-500 text-white rounded hover:bg-red-600"
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
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[9999] p-4">
            <div className="bg-white w-[510px] max-w-full rounded-xl shadow-2xl overflow-hidden z-[10000] animate-[modalFadeIn_0.3s_ease]">
              <div className="bg-gray-50 px-8 py-6 border-b flex justify-between items-center">
                <h5 className="flex items-center">
                  <AlertTriangle className="text-red-500 mr-2" size={28} />
                  <span className="text-lg">Konfirmasi Hapus Data</span>
                </h5>
                <button
                  type="button"
                  className="text-gray-400 hover:text-gray-600"
                  onClick={cancelDelete}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              <div className="p-10 text-center h-[320px] flex flex-col justify-center items-center">
                <Frown size={96} color="#dc3545" />
                <h4 className="mt-4 mb-3 text-xl font-medium">Apakah Anda yakin?</h4>
                <p className="text-lg mb-4">
                  Data user <strong>{userToDelete?.name}</strong> akan dihapus secara permanen.
                </p>
                <p className="text-red-500 text-sm">
                  Tindakan ini tidak dapat dibatalkan.
                </p>
              </div>
              <div className="px-8 py-7 border-t flex justify-end gap-4">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-500 text-white rounded-full hover:bg-gray-600 w-24"
                  onClick={cancelDelete}
                >
                  Batal
                </button>
                <button
                  type="button"
                  className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 w-24 flex items-center justify-center"
                  onClick={confirmDelete}
                >
                  <Trash size={16} className="mr-1" /> Hapus
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminHome;