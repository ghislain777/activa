<?php

namespace App\Entity;

use App\Repository\ContactRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use DateTime;

/**
 * * @ApiResource(
   *   normalizationContext={"groups"={"lecture"}},
   *     denormalizationContext={"groups"={"ecriture"}},
   *     attributes={
   *         "pagination_client_items_per_page"=true,
   *         "order"={"id": "asc"}
   *     }
   * )
   * @ApiFilter(SearchFilter::class, properties={"id": "exact", "nom": "partial", "telephone1":"exact", "description": "partial"})
 * @ORM\Entity(repositoryClass=ContactRepository::class)
 */
class Contact
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer" , options={"comment":"ID"})
     * @Groups({"lecture"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255 , options={"comment":"Civilite"})
     * @Groups({"lecture", "ecriture"})
     */
    private $civilite;

    /**
     * @ORM\Column(type="string", length=255 , options={"comment":"Nom"})
     * @Groups({"lecture", "ecriture"})
     */
    private $nom;

    /**
     * @ORM\Column(type="string", length=255, nullable=true , options={"comment":"Prenom"})
     * @Groups({"lecture", "ecriture"})
     */
    private $prenom;

    /**
     * @ORM\Column(type="string", length=255 , options={"comment":"Téléphone 1"})
     * @Groups({"lecture", "ecriture"})
     */
    private $telephone1;

    /**
     * @ORM\Column(type="string", length=255, nullable=true , options={"comment":"Téléphone 2"})
     * @Groups({"lecture", "ecriture"})
     */
    private $telephone2;

    /**
     * @ORM\Column(type="string", length=255, nullable=true , options={"comment":"Email"})
     * @Groups({"lecture", "ecriture"})
     */
    private $email;

    /**
     * @ORM\ManyToOne(targetEntity=Commune::class, inversedBy="contacts")
     *  @ORM\JoinColumn(nullable=false, name="commune")
     * @Groups({"lecture", "ecriture"})
     */
    private $commune;

    /**
     * @ORM\Column(type="string", length=255, nullable=true , options={"comment":"Adresse"})
     * @Groups({"lecture", "ecriture"})
     */
    private $adresse;

    /**
     * @ORM\ManyToOne(targetEntity=Profession::class, inversedBy="contacts")
     *  @ORM\JoinColumn(nullable=false, name="profession")
     * @Groups({"lecture", "ecriture"})
     */
    private $profession;

    /**
     * @ORM\Column(type="string", length=255, nullable=true , options={"comment":"Employeur"})
     * @Groups({"lecture", "ecriture"})
     */
    private $employeur;

    /**
     * @ORM\Column(type="datetime" , nullable=true , options={"comment":"Créé le"})
     * @Groups({"lecture", "ecriture"})
     */
    private $creele;

    /**
     * @ORM\Column(type="string", length=255, nullable=true , options={"comment":"Photo"})
     * @Groups({"lecture", "ecriture"})
     */
    private $photo;

    /**
     * @ORM\ManyToOne(targetEntity=Categoriecontact::class, inversedBy="contacts")
     *  @ORM\JoinColumn(nullable=true, name="categoriecontact")
     * @Groups({"lecture", "ecriture"})
     */
    private $categoriecontact;

    /**
     * @ORM\OneToMany(targetEntity=Appelentrant::class, mappedBy="contact")
     */
    private $appelentrants;

    public function __construct() {
        $this->creele = new DateTime();
        $this->photo = "avatar_contact.phg";
        $this->appelentrants = new ArrayCollection();
        $this->civilite = "M";
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCivilite(): ?string
    {
        return $this->civilite;
    }

    public function setCivilite(string $civilite): self
    {
        $this->civilite = $civilite;

        return $this;
    }

    public function getNom(): ?string
    {
        return $this->nom;
    }

    public function setNom(string $nom): self
    {
        $this->nom = $nom;

        return $this;
    }

    public function getPrenom(): ?string
    {
        return $this->prenom;
    }

    public function setPrenom(?string $prenom): self
    {
        $this->prenom = $prenom;

        return $this;
    }

    public function getTelephone1(): ?string
    {
        return $this->telephone1;
    }

    public function setTelephone1(string $telephone1): self
    {
        $this->telephone1 = $telephone1;

        return $this;
    }

    public function getTelephone2(): ?string
    {
        return $this->telephone2;
    }

    public function setTelephone2(?string $telephone2): self
    {
        $this->telephone2 = $telephone2;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(?string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getCommune(): ?Commune
    {
        return $this->commune;
    }

    public function setCommune(?Commune $commune): self
    {
        $this->commune = $commune;

        return $this;
    }

    public function getAdresse(): ?string
    {
        return $this->adresse;
    }

    public function setAdresse(?string $adresse): self
    {
        $this->adresse = $adresse;

        return $this;
    }

    public function getProfession(): ?Profession
    {
        return $this->profession;
    }

    public function setProfession(?Profession $profession): self
    {
        $this->profession = $profession;

        return $this;
    }

    public function getEmployeur(): ?string
    {
        return $this->employeur;
    }

    public function setEmployeur(?string $employeur): self
    {
        $this->employeur = $employeur;

        return $this;
    }

    public function getCreele(): ?\DateTimeInterface
    {
        return $this->creele;
    }

    public function setCreele(\DateTimeInterface $creele): self
    {
        $this->creele = $creele;

        return $this;
    }

    public function getPhoto(): ?string
    {
        return $this->photo;
    }

    public function setPhoto(?string $photo): self
    {
        $this->photo = $photo;

        return $this;
    }

    public function getCategoriecontact(): ?Categoriecontact
    {
        return $this->categoriecontact;
    }

    public function setCategoriecontact(?Categoriecontact $categoriecontact): self
    {
        $this->categoriecontact = $categoriecontact;

        return $this;
    }

    /**
     * @return Collection|Appelentrant[]
     */
    public function getAppelentrants(): Collection
    {
        return $this->appelentrants;
    }

    public function addAppelentrant(Appelentrant $appelentrant): self
    {
        if (!$this->appelentrants->contains($appelentrant)) {
            $this->appelentrants[] = $appelentrant;
            $appelentrant->setContact($this);
        }

        return $this;
    }

    public function removeAppelentrant(Appelentrant $appelentrant): self
    {
        if ($this->appelentrants->removeElement($appelentrant)) {
            // set the owning side to null (unless already changed)
            if ($appelentrant->getContact() === $this) {
                $appelentrant->setContact(null);
            }
        }

        return $this;
    }
}
