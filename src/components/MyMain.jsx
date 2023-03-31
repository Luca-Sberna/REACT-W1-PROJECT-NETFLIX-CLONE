const MyMain = () => (
  <>
    <div class=" d-flex m-0 p-0 justify-content-between align-items-center pt-4">
      <div class="d-flex ">
        <h1 class="text-secondary  p-2">TV Shows</h1>
        <div class="dropdown p-2 m-2 d-flex">
          <button
            class="btn btn-danger border  border-secondary dropdown-toggle  "
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Genres
          </button>
          <ul class="dropdown-menu dropdown-menu-dark bg-danger shadow-lg">
            <li>
              <a class="dropdown-item text-secondary" href="#">
                Action
              </a>
            </li>
            <li>
              <a class="dropdown-item text-secondary" href="#">
                Fantasy
              </a>
            </li>
            <li>
              <a class="dropdown-item text-secondary" href="#">
                Comedy
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="d-flex ">
        <button type="button" class="btn btn-outline-success ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-text-left "
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>
        <button type="button" class="btn btn-outline-success">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-grid-fill"
            viewBox="0 0 16 16"
          >
            <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z" />
          </svg>
        </button>
      </div>
    </div>
  </>
);

export default MyMain;
