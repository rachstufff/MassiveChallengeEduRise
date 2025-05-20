import React, { useState, useRef } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./styleadmin.css";
import {
  User,
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  Link as LinkIcon,
  AlignLeft,
  AlignCenter,
  AlignRight,
  ArrowLeft,
  LayoutDashboard,
} from "lucide-react";

const ArtikelAdmin = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isEditMode, setIsEditMode] = useState(id ? true : false);
  const [previewImg, setPreviewImg] = useState(null);
  const [formData, setFormData] = useState({
    judul: "",
    deskripsi: "",
    penulis: "",
    tanggal: new Date().toISOString().split("T")[0],
    isi: "",
  });
  const contentEditorRef = useRef(null);

  // Handle input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewImg(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEditorCommand = (command) => {
    if (command === "createLink") {
      const url = prompt("Masukkan URL link:");
      if (url) document.execCommand(command, false, url);
    } else {
      document.execCommand(command, false, null);
    }
    contentEditorRef.current.focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get content from editor
    const content = contentEditorRef.current?.innerHTML || "";

    // Create article object with all form data
    const articleData = {
      ...formData,
      content,
      image: previewImg,
    };

    // In a real app, you would save this to an API
    console.log("Article data to save:", articleData);

    // Navigate back to admin dashboard
    navigate("/dashadmin");
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
        <Link to="/dashadmin" className="nav-link">
          <LayoutDashboard className="lucide me-2" />
          Dashboard
        </Link>
        <Link to="/artikel-admin" className="nav-link active">
          <Bold className="lucide me-2" />
          Artikel
        </Link>
        <Link to="#" className="nav-link">
          <List className="lucide me-2" />
          Helpdesk
        </Link>
        <Link to="#" className="nav-link">
          <User className="lucide me-2" />
          User Settings
        </Link>
        <hr className="text-white" />
      </nav>

      {/* Main content area */}
      <main className="admin-content">
        <div className="card">
          <div className="card-header d-flex justify-content-between align-items-center bg-white">
            <h4 className="mb-0">
              {isEditMode ? "Edit Artikel" : "Tulis Artikel Baru"}
            </h4>
            <Link to="/dashadmin" className="btn btn-outline-secondary">
              <ArrowLeft size={16} className="me-1" /> Kembali
            </Link>
          </div>
          <div className="card-body p-4">
            <form className="artikel-form" onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label htmlFor="judul" className="form-label">
                  Judul Artikel
                </label>
                <input
                  type="text"
                  id="judul"
                  className="form-control"
                  placeholder="Masukkan judul artikel"
                  value={formData.judul}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="deskripsi" className="form-label">
                  Deskripsi Singkat
                </label>
                <textarea
                  id="deskripsi"
                  className="form-control"
                  placeholder="Masukkan deskripsi singkat artikel"
                  rows="3"
                  value={formData.deskripsi}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="penulis" className="form-label">
                  Nama Penulis
                </label>
                <input
                  type="text"
                  id="penulis"
                  className="form-control"
                  placeholder="Masukkan nama penulis"
                  value={formData.penulis}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="tanggal" className="form-label">
                  Tanggal Publikasi
                </label>
                <input
                  type="date"
                  id="tanggal"
                  className="form-control"
                  value={formData.tanggal}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group mb-4">
                <label htmlFor="gambar" className="form-label">
                  Upload Gambar
                </label>
                <div className="upload-area">
                  <input
                    type="file"
                    id="gambar"
                    className="form-control"
                    onChange={handleImageChange}
                    required
                  />
                  <div className="upload-preview mt-3">
                    {previewImg ? (
                      <img
                        src={previewImg}
                        alt="Preview gambar"
                        style={{ maxWidth: "100%", maxHeight: "200px" }}
                      />
                    ) : (
                      <p className="text-muted mb-0">
                        Preview gambar akan muncul di sini
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="form-group mb-4">
                <label htmlFor="isi" className="form-label">
                  Isi Artikel
                </label>
                <div className="editor-toolbar">
                  <button
                    type="button"
                    onClick={() => handleEditorCommand("bold")}
                    className="toolbar-btn"
                  >
                    <Bold size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleEditorCommand("italic")}
                    className="toolbar-btn"
                  >
                    <Italic size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleEditorCommand("underline")}
                    className="toolbar-btn"
                  >
                    <Underline size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleEditorCommand("insertUnorderedList")}
                    className="toolbar-btn"
                  >
                    <List size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleEditorCommand("insertOrderedList")}
                    className="toolbar-btn"
                  >
                    <ListOrdered size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleEditorCommand("createLink")}
                    className="toolbar-btn"
                  >
                    <LinkIcon size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleEditorCommand("justifyLeft")}
                    className="toolbar-btn"
                  >
                    <AlignLeft size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleEditorCommand("justifyCenter")}
                    className="toolbar-btn"
                  >
                    <AlignCenter size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleEditorCommand("justifyRight")}
                    className="toolbar-btn"
                  >
                    <AlignRight size={16} />
                  </button>
                </div>
                <div
                  ref={contentEditorRef}
                  contentEditable="true"
                  className="content-editor"
                  id="isi-artikel"
                ></div>
              </div>

              <button type="submit" className="btn btn-primary">
                {isEditMode ? "Update Artikel" : "Buat Artikel"}
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ArtikelAdmin;
