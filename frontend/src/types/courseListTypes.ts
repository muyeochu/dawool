export interface ListType{
    courseName: String,
    course: [
        {
          contentId: Number
          contentTypeId: Number,
          title: String,
          mapX: String,
          mapY: String,
         },
    ], 
    memo: String
}