import React from "react";
import "./UpdateUser.scss";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateUser } from "../../redux/actions/User";
const useStyles = makeStyles({
  styleInput: {
    width: "90%",
  },
  styleMarginBottom: {
    marginBottom: "20px",
  },
  styleH1: {
    margin: "20px 0px",
  },
  styleForm: {
    width: "100%",
  },
  styleButton: {
    outline: "none",
    width: "100%",
    "&:focus": {
      border: "none !important",
      outline: "none !important",
    },
    background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
  },
});
function UpdateUser(props) {
  let userInfo = useSelector((state) => {
    return state.UserReducer.infoUserBooking;
  });
  let preloadedValues;
  if (userInfo) {
    preloadedValues = {
      taiKhoan: `${userInfo?.taiKhoan}`,
      matKhau: `${userInfo?.matKhau}`,
      email: `${userInfo?.email}`,
      soDt: `${userInfo?.soDT}`,
      maNhom: "GP01",
      maLoaiNguoiDung: `${userInfo?.maLoaiNguoiDung}`,
      hoTen: `${userInfo?.hoTen}`,
    };
  }
  const Schema = yup.object().shape({
    taiKhoan: yup
      .string()
      .required("*taiKhoan is not empty!")
      .min(3, "*taiKhoan length must min 3!"),
    matKhau: yup
      .string()
      .required("*matKhau is not empty!")
      .min(3, "password length has min 3!"),
    email: yup
      .string()
      .required("*Email is not empty!")
      .email("*Email should have correct format!"),
    soDt: yup
      .string()
      .required("*soDt is not empty!")
      .matches(
        /(09|03|07|08|05)+([0-9]{8})\b/,
        "*soDt length is 10 and start with 09/03/07/08/05!"
      ),
    hoTen: yup
      .string()
      .required("*hoTen is not empty!")
      .min(4, "*hoTen length must be 4 or more 4!"),
  });
  let { register, errors, handleSubmit, control } = useForm({
    mode: "onChange",
    resolver: yupResolver(Schema),
    defaultValues: preloadedValues,
  });
  let history = useHistory();
  let dispatch = useDispatch();
  const onSubmit = (data, e, reset) => {
    console.log(data);
    dispatch(updateUser(data, history));
  };
  const classes = useStyles();
  return (
    <div className="container-fluid wp__form__update__home">
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className="wp__mui__con"
      >
        <Grid item md={12} justify="center" className={classes.styleH1}>
          <Typography variant="h6">UPDATE USER</Typography>
        </Grid>
        <form className={classes.styleForm} onSubmit={handleSubmit(onSubmit)}>
          <Grid
            spacing={3}
            container
            item
            justify="center"
            alignItems="center"
            className={classes.styleMarginBottom}
          >
            <Grid item md={3} xs={12}>
              <TextField
                fullWidth={true}
                inputRef={register}
                id="username"
                label="tài khoản"
                variant="outlined"
                color="primary"
                name="taiKhoan"
                error={!!errors.taiKhoan}
                inputProps={{ readOnly: true }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              {errors.taiKhoan && (
                <p className="text-danger">{errors.taiKhoan?.message}</p>
              )}
            </Grid>
            <Grid item md={3} xs={12}>
              <TextField
                fullWidth
                inputRef={register({ required: true })}
                // className={classes.styleInput}
                id="password"
                label="mật khẩu"
                variant="outlined"
                color="primary"
                name="matKhau"
                error={!!errors.matKhau}
              />
              {errors.matKhau && (
                <p className="text-danger">{errors.matKhau?.message}</p>
              )}
            </Grid>
          </Grid>
          <Grid
            spacing={3}
            container
            item
            justify="center"
            alignItems="center"
            className={classes.styleMarginBottom}
          >
            <Grid item md={3} xs={12}>
              <TextField
                inputRef={register}
                id="email"
                label="email"
                variant="outlined"
                color="primary"
                name="email"
                error={!!errors.email}
                fullWidth
              />
              {errors.email && (
                <p className="text-danger">{errors.email?.message}</p>
              )}
            </Grid>
            <Grid item md={3} xs={12}>
              <TextField
                fullWidth
                inputRef={register}
                id="soDt"
                label="số điện thoại"
                variant="outlined"
                color="primary"
                name="soDt"
                error={!!errors.soDt}
              />
              {errors.soDt && (
                <p className="text-danger">{errors.soDt?.message}</p>
              )}
            </Grid>
          </Grid>
          <Grid
            spacing={3}
            container
            item
            justify="center"
            alignItems="center"
            className={classes.styleMarginBottom}
          >
            <Grid item md={3} xs={12}>
              <TextField
                fullWidth
                inputRef={register}
                id="maNhom"
                label="mã nhóm"
                variant="outlined"
                color="primary"
                defaultValue="GP01"
                aria-readonly
                name="maNhom"
              />
            </Grid>
            <Grid item md={3} xs={12}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Loại người dùng
                </InputLabel>
                <Controller
                  inputProps={{ MenuProps: { disableScrollLock: true } }}
                  name="maLoaiNguoiDung"
                  control={control}
                  defaultValue={"KhachHang"}
                  as={
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                    >
                      <MenuItem value={"KhachHang"}>KhachHang</MenuItem>
                      <MenuItem value={"QuanTri"}>QuanTri</MenuItem>
                    </Select>
                  }
                />
              </FormControl>
            </Grid>
          </Grid>
          <Grid
            spacing={3}
            container
            item
            justify="center"
            alignItems="center"
            className={classes.styleMarginBottom}
          >
            <Grid item md={6} xs={12} className={classes.styleGrid}>
              <TextField
                fullWidth
                inputRef={register}
                id="fullname"
                label="họ tên"
                variant="outlined"
                color="primary"
                name="hoTen"
              />
              {errors.hoTen && (
                <p className="text-danger">{errors.hoTen?.message}</p>
              )}
            </Grid>
          </Grid>
          <Grid container item spacing={3} justify="center" alignItems="center">
            <Grid item md={6} xs={12}>
              <Button
                type="submit"
                className={classes.styleButton}
                variant="contained"
                color="secondary"
                name="submit"
              >
                CONFIRM
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </div>
  );
}
export default UpdateUser;
