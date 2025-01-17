const db = require("../db/dbConfig");

const getAllPlaylist = async () => {
  try {
    const allPlaylist = await db.any("SELECT * FROM playlists");
    return allPlaylist;
  } catch (err) {
    return err;
  }
};

const getPlaylist = async (id) => {
  try {
    const onePlaylist = await db.one("SELECT * FROM playlists WHERE id=$1", id);
    return onePlaylist;
  } catch (error) {
    return error;
  }
};

const createPlaylist = async (playlist) => {
  try {
    const newPlaylist = await db.one(
      "INSERT INTO playlists (title) VALUES($1) RETURNING *",
      [playlist.title]
    );
    return newPlaylist;
  } catch (error) {
    return error;
  }
};

const deletePlaylist = async (id) => {
  try {
    const deletedPlaylist = await db.one(
      "DELETE FROM playlists WHERE id=$1 RETURNING *",
      id
    );
    return deletedPlaylist;
  } catch (error) {
    return error;
  }
};

const updatePlaylist = async (id, playlist) => {
  try {
    const updatedPlaylist = await db.one(
      "UPDATE playlists SET title=$1 WHERE id=$2 RETURNING *",
      [playlist.title, id]
    );
    return updatedPlaylist;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllPlaylist,
  getPlaylist,
  createPlaylist,
  deletePlaylist,
  updatePlaylist,
};
