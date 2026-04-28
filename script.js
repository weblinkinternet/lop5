/* Thêm vào file style.css cũ */
.user-banner {
    background: linear-gradient(135deg, #2ecc71, #27ae60);
    color: white;
    padding: 20px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 20px;
}

.avatar { font-size: 40px; background: white; border-radius: 50%; padding: 10px; }

.stats-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    margin-bottom: 20px;
}

.stat-card {
    background: white;
    padding: 15px;
    border-radius: 15px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
    font-size: 18px;
    font-weight: bold;
}

.subject-card {
    padding: 30px;
    border-radius: 20px;
    color: white;
    margin-bottom: 15px;
    cursor: pointer;
    transition: 0.3s;
}

.math { background: #3498db; }
.viet { background: #e74c3c; }

.bottom-nav {
    position: fixed;
    bottom: 0; left: 0; right: 0;
    background: white;
    display: flex;
    justify-content: space-around;
    padding: 15px;
    box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
    z-index: 100;
}

.nav-item { color: #bdc3c7; text-align: center; cursor: pointer; }
.nav-item.active { color: #2ecc71; }
.nav-item i { display: block; font-size: 20px; }
