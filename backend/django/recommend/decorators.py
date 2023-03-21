from bson import ObjectId


def request_converting_to_object_id(func):
    def object_id_insert(*args, **kwargs):
        args[0].kwargs["pk"] = ObjectId(kwargs["pk"])
        response = func(*args, **kwargs)
        return response
    return object_id_insert