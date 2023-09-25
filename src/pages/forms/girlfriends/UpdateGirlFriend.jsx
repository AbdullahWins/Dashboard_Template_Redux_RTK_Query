import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useUpdateGirlFriendMutation } from "../../../features/girlfriends/girlFriendsApi";
import ImageHandler from "../../../components/shared/imageHandler/ImageHandler";

const UpdateGirlFriend = () => {
  const [file, setFile] = useState(null);
  const { state } = useLocation();
  const { payload } = state;
  const id = payload?._id;

  const [updateGirlfriend, { isLoading }] = useUpdateGirlFriendMutation();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const age = form.age.value;
    const location = form.location.value;
    const pros = form.pros.value;
    const cons = form.cons.value;
    const type = form.type.value;
    const status = form.status.value;
    const image = file;
    // const image = form.image.files[0];

    const data = JSON.stringify({
      name,
      age,
      location,
      pros,
      cons,
      type,
      status,
    });

    const formData = new FormData();
    formData.append("data", data);
    formData.append("file", image);

    updateGirlfriend({ id, data: formData })
      .unwrap()
      .then((res) => {
        form.reset();
        navigate("/girlfriends");
      })
      .catch((error) => {
        console.log(error);
        alert(error?.message);
      });
  };

  return (
    <section className="py-6 w-full overflow-auto h-full font-raleway">
      <div className="h-full w-full flex items-center justify-center">
        <div className="w-full max-w-xl bg-navy-50 p-6 rounded-lg">
          <div className="mb-8">
            <h2 className="text-2xl font-bold">Update Girlfriend</h2>
          </div>
          <form action="" className="w-full" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              {/* name */}
              <div className="flex flex-col gap-1">
                <span>Name</span>
                <input
                  type="text"
                  placeholder="Name"
                  defaultValue={payload?.name}
                  className="w-full bg-transparent border border-fade outline-none py-4 pl-4 pr-1 text-sm rounded-lg"
                  name="name"
                  required
                />
              </div>
              {/* Age */}
              <div className="flex flex-col gap-1">
                <span>Age</span>
                <input
                  type="text"
                  placeholder="Age"
                  defaultValue={payload?.age}
                  className="w-full bg-transparent border border-fade outline-none py-4 pl-4 pr-1 text-sm rounded-lg"
                  name="age"
                  required
                />
              </div>
              {/* Location */}
              <div className="flex flex-col gap-1">
                <span>Location</span>
                <input
                  type="text"
                  placeholder="Location"
                  defaultValue={payload?.location}
                  className="w-full bg-transparent border border-fade outline-none py-4 pl-4 pr-1 text-sm rounded-lg"
                  name="location"
                  required
                />
              </div>
              {/* Pros */}
              <div className="flex flex-col gap-1">
                <span>Pros</span>
                <textarea
                  name="pros"
                  className="w-full bg-transparent border border-fade outline-none py-4 pl-4 pr-1 text-sm rounded-lg h-16"
                  placeholder="Pros"
                  required
                >
                  {payload?.pros}
                </textarea>
              </div>
              {/* Cons */}
              <div className="flex flex-col gap-1">
                <span>Cons</span>
                <textarea
                  name="cons"
                  className="w-full bg-transparent border border-fade outline-none py-4 pl-4 pr-1 text-sm rounded-lg h-16"
                  placeholder="Cons"
                  required
                >
                  {payload?.cons}
                </textarea>
              </div>
              {/* Type */}
              <div className="flex flex-col gap-1">
                <span>Type</span>
                <input
                  type="text"
                  placeholder="Type"
                  defaultValue={payload?.type}
                  className="w-full bg-transparent border border-fade outline-none py-4 pl-4 pr-1 text-sm rounded-lg"
                  name="type"
                  required
                />
              </div>
              {/* Status */}
              <div className="flex flex-col gap-1">
                <span>Status</span>
                <input
                  type="text"
                  placeholder="Status"
                  defaultValue={payload?.status}
                  className="w-full bg-transparent border border-fade outline-none py-4 pl-4 pr-1 text-sm rounded-lg"
                  name="status"
                  required
                />
              </div>
              {/* Image */}
              {/* <div className="flex flex-col gap-1">
                <span>Image</span>
                <input
                  type="file"
                  placeholder="Status"
                  className="w-full bg-transparent border border-fade outline-none py-4 pl-4 pr-1 text-sm rounded-lg"
                  name="image"
                />
              </div> */}
              {/* Image */}
              <div className="flex flex-col gap-1">
                <span>Image</span>
                <ImageHandler
                  image={payload?.image}
                  setFile={setFile}
                ></ImageHandler>
              </div>
            </div>

            {/* submit button  */}
            <div className="mt-10 flex items-center gap-6">
              <Link
                to="/girlfriends"
                className="inline-flex px-8 py-3 bg-errorColor rounded"
              >
                Cancel
              </Link>
              <button
                type="submit"
                className={`inline-flex px-8 py-3 ${
                  isLoading ? "bg-fade" : "bg-primaryColor"
                } rounded`}
                disabled={isLoading}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default UpdateGirlFriend;
