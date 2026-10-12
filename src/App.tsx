import React, { useState, useMemo, useEffect } from 'react';
import { projects, Project } from './data/projects';

type CategoryFilter = 'All' | 'Productivity' | 'Developer Tools' | 'Education';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModalProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Filter projects by category and search query
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === 'All' || project.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        q === '' ||
        project.title.toLowerCase().includes(q) ||
        project.subtitle.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.tags.some((tag) => tag.toLowerCase().includes(q)) ||
        project.highlights.some((hl) => hl.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const categoryCounts = useMemo(() => {
    return {
      All: projects.length,
      Productivity: projects.filter((p) => p.category === 'Productivity').length,
      'Developer Tools': projects.filter((p) => p.category === 'Developer Tools').length,
      Education: projects.filter((p) => p.category === 'Education').length,
    };
  }, []);

  return (
    <div className="portfolio-app">
      {/* Header */}
      <header className="site-header">
        <div className="header-container">
          <a href="#" className="brand-link" id="brand-logo" aria-label="Paulo Rogério Sales Santos Portfolio">
            <div className="brand-avatar">PS</div>
            <div className="brand-info">
              <span className="brand-name">Paulo Sales</span>
              <span className="brand-role">Senior Software Engineer</span>
            </div>
          </a>

          <div className="header-actions">
            <div className="badge-status">
              <span className="status-dot"></span>
              <span>5 Apps Online</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Hero Section */}
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-pill">
            <span>Portfolio &amp; Production Applications</span>
          </div>

          <h1 id="hero-title" className="hero-title">
            Engineering scalable web solutions &amp;{' '}
            <span className="gradient-text">high-utility applications</span>
          </h1>

          <p className="hero-description">
            With 17+ years of experience designing and developing mission-critical systems and modern web software.
            Explore the live web applications below, built with modern frontend architectures, clean algorithms, and client-side reliability.
          </p>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-value">17+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">5</span>
              <span className="stat-label">Live Applications</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">100%</span>
              <span className="stat-label">Production Ready</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">Client-Side</span>
              <span className="stat-label">Privacy First</span>
            </div>
          </div>
        </section>

        {/* Controls Bar: Filter & Search */}
        <section className="controls-bar" aria-label="Filter and search applications">
          <div className="filter-group" role="tablist" aria-label="Category Filters">
            {(['All', 'Productivity', 'Developer Tools', 'Education'] as CategoryFilter[]).map((cat) => (
              <button
                key={cat}
                id={`filter-btn-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                type="button"
                role="tab"
                aria-selected={selectedCategory === cat}
                className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                <span>{cat}</span>
                <span className="filter-count">{categoryCounts[cat]}</span>
              </button>
            ))}
          </div>

          <div className="search-box">
            <span className="search-icon" aria-hidden="true">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </span>
            <input
              id="search-input"
              type="text"
              className="search-input"
              placeholder="Search apps, tags, tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search applications"
            />
          </div>
        </section>

        {/* Applications Showcase Grid */}
        <section className="projects-grid" aria-label="Applications list">
          {filteredProjects.length === 0 ? (
            <div className="empty-state">
              <h3 className="empty-state-title">No applications found</h3>
              <p className="empty-state-desc">Try modifying your search query or switching categories.</p>
            </div>
          ) : (
            filteredProjects.map((project) => {
              const displayUrl = project.url.replace(/^https?:\/\//, '').replace(/\/$/, '');
              const categoryClass =
                project.category === 'Developer Tools'
                  ? 'dev'
                  : project.category === 'Education'
                  ? 'edu'
                  : '';

              return (
                <article key={project.id} className="project-card" id={`card-${project.id}`}>
                  {/* Browser Mockup Window Header */}
                  <div className="browser-frame">
                    <div className="browser-header">
                      <div className="traffic-dots">
                        <span className="dot dot-red"></span>
                        <span className="dot dot-yellow"></span>
                        <span className="dot dot-green"></span>
                      </div>
                      <div className="browser-address" title={project.url}>
                        <svg className="lock-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                        </svg>
                        <span>{displayUrl}</span>
                      </div>
                      <div style={{ width: '42px' }}></div>
                    </div>

                    {/* Snapshot Preview */}
                    <div
                      className="snapshot-container"
                      onClick={() => setActiveModalProject(project)}
                      title={`Click to enlarge snapshot of ${project.title}`}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          setActiveModalProject(project);
                        }
                      }}
                    >
                      <img
                        src={project.snapshot}
                        alt={`Snapshot screenshot of ${project.title}`}
                        className="snapshot-img"
                        loading="lazy"
                      />
                      <div className="snapshot-overlay">
                        <span className="snapshot-overlay-badge">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                          </svg>
                          Enlarge Snapshot
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="card-body">
                    <div className="card-category-row">
                      <span className={`category-tag ${categoryClass}`}>
                        {project.category}
                      </span>
                      <span className="badge-status" style={{ padding: '0.15rem 0.5rem', fontSize: '0.7rem' }}>
                        <span className="status-dot"></span>
                        Live
                      </span>
                    </div>

                    <h2 className="card-title">{project.title}</h2>
                    <h3 className="card-subtitle">{project.subtitle}</h3>
                    <p className="card-description">{project.description}</p>

                    {/* Feature Highlights */}
                    <ul className="highlights-list" aria-label="Key features">
                      {project.highlights.map((hl, idx) => (
                        <li key={idx} className="highlight-item">
                          <span className="highlight-bullet" aria-hidden="true">✓</span>
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Badges */}
                    <div className="card-tags" aria-label="Technologies used">
                      {project.tags.map((tag) => (
                        <span key={tag} className="tag-badge">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="card-actions">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                        id={`launch-btn-${project.id}`}
                        aria-label={`Open ${project.title} in a new tab`}
                      >
                        <span>Launch App</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="7" y1="17" x2="17" y2="7"></line>
                          <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                      </a>

                      <button
                        type="button"
                        className="btn-secondary"
                        id={`snapshot-btn-${project.id}`}
                        onClick={() => setActiveModalProject(project)}
                        aria-label={`View full snapshot of ${project.title}`}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <circle cx="11" cy="11" r="8"></circle>
                          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                        <span>Snapshot</span>
                      </button>
                    </div>
                  </div>
                </article>
              );
            })
          )}
        </section>
      </main>

      {/* Snapshot Modal / Lightbox */}
      {activeModalProject && (
        <div
          className="modal-backdrop"
          onClick={() => setActiveModalProject(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <div className="modal-title-wrap">
                <span className="badge-status">
                  <span className="status-dot"></span>
                  Snapshot
                </span>
                <h3 id="modal-title" className="modal-title">{activeModalProject.title}</h3>
              </div>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setActiveModalProject(null)}
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            <div className="modal-body">
              <div className="modal-snapshot-frame">
                <img
                  src={activeModalProject.snapshot}
                  alt={`Full screenshot of ${activeModalProject.title}`}
                  className="modal-snapshot-img"
                />
              </div>

              <div className="modal-meta-grid">
                <div>
                  <h4 className="modal-desc-heading">About This Application</h4>
                  <p className="modal-desc-text">{activeModalProject.description}</p>
                  <div className="card-tags" style={{ marginTop: '0.75rem' }}>
                    {activeModalProject.tags.map((t) => (
                      <span key={t} className="tag-badge">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="modal-action-box">
                  <a
                    href={activeModalProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ textAlign: 'center', width: '100%' }}
                  >
                    <span>Visit Live Website</span>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </a>
                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={() => setActiveModalProject(null)}
                    style={{ width: '100%' }}
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-top">
            <div className="footer-author">
              <span className="footer-author-name">Paulo Rogério Sales Santos</span>
              <span className="footer-author-desc">
                Senior Software Engineer • BSc in Computer Science • 17+ Years Experience
              </span>
            </div>

            <div className="footer-links">
              <a
                href="https://github.com/paulosales"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
                id="footer-github"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
                <span>GitHub</span>
              </a>

              <a
                href="https://linkedin.com/in/paulo-sales"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
                id="footer-linkedin"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.65 1.65 0 0 0-1.66 1.66 1.66 1.66 0 0 0 1.66 1.66 1.66 1.66 0 0 0 1.66-1.66c0-.92-.74-1.66-1.66-1.66z"/>
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Paulo Rogério Sales Santos. All rights reserved.</span>
            <span>All 5 applications hosted &amp; maintained independently.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
