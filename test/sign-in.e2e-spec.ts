import { expect, test } from '@playwright/test'

test('sign in successfully', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByLabel('Seu e-mail').fill('diego.schell.f@gmail.com')
  await page.getByRole('button', { name: 'Acessar Painel' }).click()

  const toast = page.getByText(
    'Enviamos um link de autenticacao para seu e-mail',
  )

  await expect(toast).toBeVisible()

  await page.waitForTimeout(2000)
})

test('sign in with invalid email', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByLabel('Seu e-mail').fill('invalid-email@gmail.com')
  await page.getByRole('button', { name: 'Acessar Painel' }).click()

  const toast = page.getByText('Credenciais inválidas')

  await expect(toast).toBeVisible()

  await page.waitForTimeout(2000)
})

test('navigate to new restaurant page', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'Cadastre sua loja' }).click()

  expect(page.url()).toContain('/sign-up')
})
