const students = require(`./MongoConnect`).db(`ScriptDev`).collection(`Students`);


//Get All Documens from Account Collection
const GetAllStudent = async () => {
  const cursor = await students.find();
  return cursor.toArray();
};

//Insert New Document
const InsertStudent =  async (id, name, course, year, section) => {
  return await students.insertOne({id: id, name: name, course: course, year: year, section: section, edit: false});
};

//Update Document
const UpdateStudent = async (id, name, course, year, section) => {
  return await students.updateOne({id: parseInt(id)}, {$set: {
      name: name,
      course: course,
      year: year,
      section: section
  }});
};

//Delete a Document
const DeleteStudent =  async (id) => {
  return await students.deleteOne({id: parseInt(id)});
};


module.exports = {GetAllStudent, InsertStudent, UpdateStudent, DeleteStudent};
