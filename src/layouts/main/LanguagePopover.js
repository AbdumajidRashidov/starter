import { useRef, useState } from "react";
// material
import { alpha } from "@mui/material/styles";
import { Box, MenuItem, ListItemText, Button } from "@mui/material";
// components
import MenuPopover from "../../components/MenuPopover";
import { useLocaleState } from "react-admin";

// ----------------------------------------------------------------------

const LANGS = [
  // {
  //   value: 'en',
  //   label: 'English',
  //   icon: '/static/icons/ic_flag_en.svg'
  // },
  {
    value: "uz",
    label: "O`zbek",
  },
  {
    value: "ru",
    label: "Русский",
  },
];

// ----------------------------------------------------------------------

export default function LanguagePopover() {
  const [locale, setLocale] = useLocaleState("ru");

  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const langRef = useRef();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const setUzLang = () => {
    setLocale("uz");
    localStorage.setItem("locale", "uz");
    handleClose();
  };
  const setRuLang = () => {
    setLocale("ru");
    localStorage.setItem("locale", "ru");
    handleClose();
  };
  return (
    <>
      <Button
        ref={anchorRef}
        onClick={handleOpen}
        sx={{
          padding: 0,
          width: 44,
          height: 44,
          ...(open && {
            bgcolor: (theme) =>
              alpha(
                theme.palette.primary.main,
                theme.palette.action.focusOpacity
              ),
          }),
        }}
      >
        {locale === "uz" ? LANGS[0].value : LANGS[1].value}
      </Button>

      <MenuPopover
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
      >
        <Box sx={{ py: 1 }}>
          <MenuItem
            onClick={setUzLang}
            key={LANGS[0].value}
            selected={locale === "uz"}
            sx={{ py: 1, px: 2.5 }}
          >
            <ListItemText primaryTypographyProps={{ variant: "body2" }}>
              <span
                ref={langRef}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                {LANGS[0].label}
              </span>
            </ListItemText>
          </MenuItem>
          <MenuItem
            onClick={setRuLang}
            key={LANGS[1].value}
            selected={locale === "ru"}
            sx={{ py: 1, px: 2.5 }}
          >
            <ListItemText primaryTypographyProps={{ variant: "body2" }}>
              <span
                ref={langRef}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                {LANGS[1].label}
              </span>
            </ListItemText>
          </MenuItem>
        </Box>
      </MenuPopover>
    </>
  );
}
