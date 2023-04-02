import { Component } from "react";
import {} from "react-bootstrap";

const Profile = () => (
  <>
    <div
      id="cont-profile"
      class="container d-flex  border-bottom border-dark opacity-75 p-0"
    >
      <div>
        <h1 class="text-secondary ">Edit Profile</h1>

        <div id="cont-profile-2" class="border-top border-dark py-3">
          <div class="row ">
            <div class="col-4 ">
              <img
                src="assets/img/kids_icon.png"
                width="140px"
                alt="user-img"
              />
            </div>
            <div class="col-8   ">
              <div /* style="width: 19rem;" */>
                <h3 class="text-secondary bg-info p-1 fs-5">Strive Student</h3>
              </div>
              <div class=" py-3 border-bottom border-dark">
                <p class="text-secondary fs-5">Language:</p>
                <button
                  class="btn btn-danger border  border-secondary dropdown-toggle px-3 py-1  "
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  ---
                </button>
                <ul class="dropdown-menu dropdown-menu-dark bg-danger">
                  <li>
                    <a class="dropdown-item text-secondary" href="#">
                      English
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item text-secondary" href="#">
                      Italian
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item text-secondary" href="#">
                      Spanish
                    </a>
                  </li>
                </ul>
              </div>

              <p class="pt-3 text-secondary fs-5">Maturity Settings:</p>
              <p
                class="text-uppercase text-secondary bg-success p-1 text-center"
                /* style="width: 13rem;" */
              >
                all maturity ratings
              </p>
              <p class="text-secondary">
                Show titles of all maturity ratings for this profile.
              </p>
              <div class="border-bottom border-dark pb-4">
                <button
                  type="button"
                  class=" btn btn-outline-success text-secondary border-secondary text-uppercase px-4 py-1"
                >
                  edit
                </button>
              </div>

              <p class="fs-5 pt-2 text-secondary">Autoplay controls</p>
              <div class="form-check ">
                <input
                  class="form-check-input bg-primary border-secondary fs-5  "
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="text-secondary fs-6" for="flexCheckDefault">
                  Autoplay next episode in a series on all devices
                </label>
              </div>

              <div class="form-check ">
                <input
                  class="form-check-input bg-primary border-secondary fs-5  "
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
                <label class="text-secondary fs-6" for="flexCheckChecked">
                  Autoplay previews while browsing on all devices
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container justify-content-start  d-flex  py-4 border-dark opacity-75 ">
      <div class="row flex-nowrap gap-4 p-0">
        <button
          type="button"
          class="col-3 btn btn-light text-uppercase px-4 fw-bold border-secondary"
        >
          save
        </button>
        <button
          type="button"
          class="col-4 btn btn-outline-success text-uppercase border-secondary text-secondary"
        >
          cancel
        </button>
        <button
          type="button"
          class="col-6 btn btn-outline-success px-4 text-uppercase border-secondary text-secondary"
        >
          delete profile
        </button>
      </div>
    </div>
  </>
);
export default Profile;
